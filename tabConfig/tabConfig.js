var microsoftTeams;

// Set up the tab and stuff.
$(document).ready(function () {
    microsoftTeams.initialize();
    microsoftTeams.settings.registerOnSaveHandler(function (saveEvent) {
        microsoftTeams.settings.setSettings({
            suggestedDisplayName: "Auth Sample",
            contentUrl: createTabUrl(),
            entityId: "test123",
            websiteUrl: createTabUrl(),
        });
        saveEvent.notifySuccess();
    });

    microsoftTeams.settings.setValidityState(true);
});

function createTabUrl() {
    return window.location.protocol + "//" + window.location.host + "/default";
}