public with sharing class AccessControlController {
    @AuraEnabled(cacheable=true)
    public static Boolean canAccessComponent(String allowAccess) {
        try {
            return FeatureManagement.checkPermission(allowAccess);
        } catch (Exception e) {
            throw new AuraException(e);
        }
    }
}
