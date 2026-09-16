
interface MonitoringDashboard {
    Source: string;
    Environment: string;
    DashboardType: string;
    DashboardUrl: string;
}


interface AssetMonitoring {
    PerformanceMonitoring: MonitoringDashboard[];
    ResourceMonitoring: MonitoringDashboard[];
    DistributedTracing: MonitoringDashboard[];

}

interface DeployableAsset {
    GitRepoName: string // github
    ApplicationName: string // multiple sources
    Namespace: string // OpenShift/AWS/Azure
    Environment: string; // Multiple Sources
    BusinessCriticality: string // servicenow
    Description: string; // servicenow
    ServiceNowAS: string; // servicenow
    ManagedBy: string; // servicenow
    Domain: string; // servicenow
    JiraTeamKey: string // github
    Language: string // multiple sources
    WorkloadType: string; // multiple sources
    AlertExists: boolean; // servicenow & monitoring platform
    Tags: string[]; // multiple sources
    AssetMonitoring: AssetMonitoring
}


interface SingleLevelConsumerDependency{
    TracingProvider: string; // monitoring platform
    Target: string; // dependency deployable asset
    Source: string; // consumer deployable asset
}

interface MultiLevelConsumerDependency {
    TracingProvider: string; // monitoring platform
    RootConsumerName: string;
    Target: string; // dependency deployable asset
    Source: string; // consumer deployable asset
}