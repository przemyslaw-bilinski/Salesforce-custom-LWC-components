public with sharing class LookupController {

    @AuraEnabled(Cacheable=true)
    public static List<SObject> fetchRecords(String objectApiName, String recordName, String fieldSetName, String whereClause) {
        Set<String> fields = fieldsFromFieldSet(objectApiName, fieldSetName);

        String query = String.format('SELECT {0} FROM {1}', new List<String>{String.join(new List<String>(fields), ','), objectApiName});
        if (recordName != null) {
            String likeString = '%' + String.escapeSingleQuotes(recordName) + '%';
            query += ' WHERE NAME LIKE :likeString';
        }
        if(whereClause != null){
            query += whereClause;
        }
        return Database.query(query);
    }

    private static Set<String> fieldsFromFieldSet(String objectApiName, String fieldSetName){
        Set<String> fields = new Set<String>();
        Schema.FieldSet fieldSet = ((SObject)Type.forName(objectApiName).newInstance()).getSObjectType().getDescribe().fieldSets.getMap().get(fieldSetName);
        for (Schema.FieldSetMember fieldSetMember : fieldSet.getFields()) {
            fields.add(fieldSetMember.getSObjectField().getDescribe().getName());
        }

        return fields;
    }

}