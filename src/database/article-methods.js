
const db = require('./index').db
const { id: myid } = require('monk')

const articleCollection = db.get('articles') 

//
// Article methods
//
//  Objects stored in the DB follow the following structure:
//  {title,desc,url,date_added}
//

const getArticles = async () => {       
    const articles = await articleCollection.find({}).catch(err=>{console.log(err)})   
    if (articles) {
        return {status:true, msg: articles}
    }  else {
        return {status:false, msg:"Unable to access DB!"}
    }  
}

const getArticleByID = async (id) => {
    if(typeof id == 'string' && id.length === 12 || id.length === 24) {
            const product = await articleCollection.findOne(myid(id)).catch(err=>{console.log(err)})
            if( product ){
                return {status:true, msg: product}
            } else {
                return {status:false, msg: "ID not found!"} 
            }  
    } else {
        return {status:false, msg: "Not an ID!"}
    }
}

const addArticle = async (article) => {

    let articleTemplate = {
        title:null,
        desc:null,
        url:null,
        date_added:null,
    } 

    for (let prop in article) { //replace the template
        articleTemplate[prop]=article[prop] 
    } 

    let failSafe = true
    await userDB.insert(articleTemplate).catch(err=>{console.log(err); failSafe = false})
    return {status: failSafe, msg: articleTemplate}
}

const deleteArticleByID = async (id) => {
    if(typeof id == 'string' && id.length === 12 || id.length === 24) {
            const article = await articleCollection.findOneAndDelete(myid(id)).catch(err=>{console.log(err)})
            if( article ){
                return {status:true, msg: article}
            } else {
                return {status:false, msg: "ID not found!"} 
            }  
    } else {
        return {status:false, msg:"Not an ID!"} 
    }
}

const updateArticleByID = async (id, {title,desc,url,date_added }) => {

    if(typeof id == 'string' && id.length === 12 || id.length === 24) {
        const article = await articleCollection.findOneAndUpdate(myid(id),{$set: {title,desc,url,date_added}}).catch(err=>{console.log(err)})
        if( article ){
            return {status:true, msg: article}
        } else {
            return {status:false, msg: "ID not found!"} 
        }  
    } else {
        return {status:false, msg: "Not an ID!"}
    }

}

module.exports = {
    getArticles,
    getArticleByID,
    addArticle,
    deleteArticleByID,
    updateArticleByID,
}