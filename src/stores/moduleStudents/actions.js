import studentApi from '../../api/studentApi'
import * as types from './types'


const actions={
    async [types.PAGINATION_LIST_STUDENT_REQUEST]({commit},payload){
        commit(types.PAGINATION_LIST_STUDENT_REQUEST)
        try {
            console.log(payload,"payloadd");

            let path=`/pagination?activePage=${payload}&limit=${types.limit}`
           
         const a= await studentApi(types.HTTP_READ,path,"")
         console.log(a ,"aa");
         
            commit(types.PAGINATION_LIST_STUDENT_SUCCESS,{
                listData: a.allData,
                pagination:a.pagi,
                totalPage:a.totalPage,
                activePage:payload
            })
            
        } catch (error) {
            commit(types.UPDATE_LIST_STUDENT_FAILURE)

        }
    },


    async [types.SEARCH_LIST_STUDENT_REQUEST]({commit},payload){
        commit(types.SEARCH_LIST_STUDENT_REQUEST)
        try {
          
            let path=`/search?activePage=${payload.activePage}&limit=${types.limit}&name=${payload.textSearch}`
           
         const a= await studentApi(types.HTTP_READ,path,"")
         console.log(a ,"aa");
         
            commit(types.SEARCH_LIST_STUDENT_SUCCESS,{
                search:a.search,
                totalPage:a.totalPage,
                activePage:payload.activePage,
                textSearch:payload.textSearch
            })
            
        } catch (error) {
            commit(types.SEARCH_LIST_STUDENT_FAILURE)

        }
    },

    



    async [types.GET_LIST_STUDENT_REQUEST]({commit}){
        commit(types.GET_LIST_STUDENT_REQUEST)
        try {
            // console.log("abd");

            const res=await studentApi(types.HTTP_READ,"","")
            console.log(res,"resss");

            if(!res) throw res
            commit(types.GET_LIST_STUDENT_SUCCESS,res.dataList)
             
        } catch (error) {
            commit(types.GET_LIST_STUDENT_FAILURE, error)

        }
    }
    ,
    async [types.ADD_LIST_STUDENT_REQUEST]({commit,dispatch},name){
        commit(types.ADD_LIST_STUDENT_REQUEST)
        try {
            await studentApi(types.HTTP_CREATE,"",name)
            commit(types.ADD_LIST_STUDENT_SUCCESS)
          
            dispatch(types.GET_LIST_STUDENT_REQUEST)
             
        } catch (error) {
            commit(types.ADD_LIST_STUDENT_FAILURE)

        }
    },

    async [types.DELETE_LIST_STUDENT_REQUEST]({commit,dispatch},payload){
        commit(types.ADD_LIST_STUDENT_REQUEST)
        try {
            let path=`/${payload}`
            await studentApi(types.HTTP_DELETE,path,"")
            commit(types.DELETE_LIST_STUDENT_SUCCESS)
          
            dispatch(types.GET_LIST_STUDENT_REQUEST)
             
        } catch (error) {
            commit(types.DELETE_LIST_STUDENT_FAILURE)

        }
    },


    async [types.UPDATE_LIST_STUDENT_REQUEST]({commit,dispatch},payload){
        commit(types.UPDATE_LIST_STUDENT_REQUEST)
        try {

            let path=`/${payload.id}`
            console.log(payload.name,"ơath");
         const a=  await studentApi(types.HTTP_UPDATE,path,payload)
         console.log(a,"a");
            commit(types.UPDATE_LIST_STUDENT_SUCCESS)
          
            dispatch(types.GET_LIST_STUDENT_REQUEST)
             
        } catch (error) {
            commit(types.UPDATE_LIST_STUDENT_FAILURE)

        }
    },

  


}

export default actions