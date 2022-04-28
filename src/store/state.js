import create from 'zustand';
import axios from 'axios';
import { env } from "../utils/EnvironmentVariables.js";

//zustand API document: https://betterprogramming.pub/react-state-management-with-zustand-b816472b4be7

const DEFAULT_MODULE = {
    id: 0,
    title: "",
    embedLink: "",
    // markdownGuide: "",
    // cardLanguageImageLink: "",
    // cardDescription: "",
    // keywords: []
    // cardDifficulty: Enumerator,
}

//Store 1
//TODO: Not sure if the second 'await' keyword is necessary in these async calls...
const bcModulesStore = create((set, get) => ({
    
    bcModules: [],
    getModules: async () => {
        const res = await axios.get(env().API_URL + "/bc-modules", {withCredentials: true})
        set({ bcModules: await res.data })
        return res.data; //This is the successful return value.
    },
    //TODO: currentModule needs to be set with a module model, so that values can be set incrementally in the module builder.
    currentModule: {
        title: "Module Title",
        embedLink: "http://TestLink.com"
    },
    createModule: async () => {
        const res = await axios.post(env().API_URL + "/bc-modules", get().currentModule, {withCredentials: true}) //Post the new module
        set({ currentModule: res.data }) //set currentModule using the return from the post
        set(state => ({
            bcModules: [ //Set new values for bcModules[]
                ...state.bcModules, //Include the previous values of bcModules[]
                res.data, //add the new module to the end of the bcModules[]. This is to keep the store/state in sync with the backend. We could have also reloaded all modules after the create, but doing it this way removes the need for the extra api call/load.
            ]
        }))
        //return res.data;
    },
    updateModule: async () => {
        const res = await axios.put(env().API_URL + "/bc-modules/" + get().currentModule.id, get().currentModule, {withCredentials: true})
        set({ currentModule: await res.data })
        //return res.data;
    },
    deleteModule: async (moduleId) => {
        const res = await axios.delete(env().API_URL + "/bc-modules/" + moduleId, {withCredentials: true})
        set({ currentModule: DEFAULT_MODULE })  //reset currentModule using bcModuleDataModel
        set( state => ({
            bcModules: state.bcModules.filter( module => module.id !== moduleId) //Update bcModules[] to stay in sync with backend. filter() removes the module with matching id. Doing this here removes the need to make an API call to update bcModules[]
        }))
        //return res.data;
    },
    //TODO: This is not done, setting current module needs to be done searching objects bcModules[] for a matching ID, can't have anything to do with index.
    // setCurrentModule: (moduleId) => {
    //     set( state => ({currentModule: state.bcModules[moduleId]}))
    // }
}));


//Test Store
const testStore = create((set) => ({
    country: "US",
    dollars: 0,
    broke: false,
    increaseDollars: () => set((state) => ({ dollars: state.dollars + 1})),
    decreaseDollars: () => set((state) => ({ dollars: state.dollars - 1})),
    setBroke: (input) => set((state) => ({broke: input})),
}));

export { bcModulesStore, testStore };