import axios from 'axios'

axios.defaults.baseURL = "http://100.72.54.216:3000/api";

const fakeGroupId = "5dd9fe1958b1d67b30150579";//"5dd6dda5c4a8434f317eda79"//

class MeetupApi {
    constructor(){
        this.groupId = fakeGroupId
        
        this.path = `/groups/${this.groupId}/meetups`;
        
    }
    async fetchGroupMeetups() {
        
        const {data} = await axios.get(this.path);
        
        //console.log(typeof(data.meetups))
        return data.meetups;
        // try {
        //     const { data } = await axios.get(this.path)
        //     // resolve(data)
        //   } catch (error) {
        //     console.log(error.response) // <---- 
        //     reject(error)
        //   }
    }
}

export {
    MeetupApi
}

//fetch method: fetch api data 
//not work with android simulator
// export const fetchMeetups = () => 
//     fetch("https://localhost:3000/api/meetups")
//     .then(res => res.json())
//     .catch(error => { throw error});

//http://192.168.1.155:3000/api/groups/5dd9fe1958b1d67b30150579/meetups