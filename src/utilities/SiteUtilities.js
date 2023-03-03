let instance;
let siteState = {
    theme: 'light'
}

/**
 * Singleton class for 
 */
class SiteUtility {
    constructor() {
        if (instance) {
            return instance
        }

        instance = this

        
    }

    getSiteTheme() {
        return siteState.theme
    }

    setSiteTheme(mode) {
        siteState.theme = mode
    }
}

let stateUtilityInstance = Object.freeze(new SiteUtility());

export default stateUtilityInstance;