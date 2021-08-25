'use strict';
const _ = require('lodash');
const db = require('./db.js');


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
    return mockDBCall(dataAccessMethod);
};

const getListOfAgesOfUsersWith = (item) => {
    const dataAccessMethod = () => {
        // fill me in :)
        const nameItemLists = _.pickBy(db.itemsOfUserByUsername, (items, _)=>items.includes(item));
        const nameLists = Object.keys(nameItemLists);
        const nameWithAgeLists = _.map(db.usersById, (userInfo)=>{
            if(nameLists.indexOf(userInfo.username) !== -1) return userInfo
        })
        const nameWithAgeListsFiltered = _.filter(nameWithAgeLists, Boolean);

        const userInfos = _.map(db.usersById, (userInfo, _)=>userInfo);
        const countForAges = _.countBy(userInfos, "age");

        const ageCountLists =  _.map(nameWithAgeListsFiltered, (userInfo, _)=>{
            return {'age': userInfo.age, 'count': countForAges[userInfo.age]}
        })
        const uniqueAgeCountLists = _.uniqWith(ageCountLists, _.isEqual);
        return _.chain(uniqueAgeCountLists).sortBy("age").sortBy("count");
    }
    return mockDBCall(dataAccessMethod);
}

const getAllItems = ()=>{
    const dataAccessMethod = () => {
        const combinedArr =  Object.values(db.itemsOfUserByUsername).reduce((acc, cur)=>{
            return acc.concat(cur);
            console.log(cur);
        },
        [])
        return _.uniqWith(combinedArr, _.isEqual);
    }
    return mockDBCall(dataAccessMethod);
}

module.exports = {
    getUsers,
    getListOfAgesOfUsersWith, 
    getAllItems
};
