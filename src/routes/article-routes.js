const ArticleMethods = require('../database/article-methods.js')

const GET_ArticlesAll = async (req, res) => {
    const attemptGet = await ArticleMethods.getArticles()
    if(attemptGet.status){
        res.status(200).json({msg:attemptGet}) 
    } else {
        res.status(400).json({msg:attemptGet}) 
    } 
}

const GET_ArticlesByID = async (req, res) => {
    const attemptGet = await ArticleMethods.getArticleByID(req.params.id)
    if(attemptGet.status){
        res.status(200).json({msg:attemptGet}) 
    } else {
        res.status(400).json({msg:attemptGet}) 
    } 
}

const POST_Article = async (req, res) => {
    const attemptGet = await ArticleMethods.addArticle(req.body)
    if(attemptGet.status){
        res.status(200).json({msg:attemptGet}) 
    } else {
        res.status(400).json({msg:attemptGet}) 
    } 
}

const DELETE_ArticlesByID = async (req, res) => {
    const attemptGet = await ArticleMethods.deleteArticleByID(req.params.id)
    if(attemptGet.status){
        res.status(200).json({msg:attemptGet}) 
    } else {
        res.status(400).json({msg:attemptGet}) 
    } 
}

const PUT_ArticlesByID = async (req, res) => {
    const attemptGet = await ArticleMethods.updateArticleByID(req.params.id, req.body)
    if(attemptGet.status){
        res.status(200).json({msg:attemptGet}) 
    } else {
        res.status(400).json({msg:attemptGet}) 
    } 
}


//
//  ROUTE DEFINITIONS
//  METHOD, ENDPOINTS, CALLBACK
//
//
//

const routes = [
    {type:"get", endpoint:"/articles", cb: GET_ArticlesAll }, 
    {type:"post", endpoint:"/articles", cb: POST_Article },
    {type:"get", endpoint:"/articles/:id", cb: GET_ArticlesByID },
    {type:"delete", endpoint:"/articles/:id", cb: DELETE_ArticlesByID },
    {type:"put", endpoint:"/articles/:id", cb: PUT_ArticlesByID },
]

module.exports = {
    routes,
}
