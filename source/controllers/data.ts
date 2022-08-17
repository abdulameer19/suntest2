import Data from "../models/data";
import { Request, Response } from "express";



const listData=async(req:Request,res:Response)=>{
    const {c,dateFrom,dateTo,range}=req.query   

try{
    const data=await Data.aggregate([
{
    $match:{ ReportingCountry:c,
   NumberDosesReceived:{$gte:'1'},    
    YearWeekISO:{$gte:dateFrom,$lt:dateTo}}
},
{
$group:
{  
    _id:"$YearWeekISO",NumberDosesReceived:{$sum:{$add:{$toInt:"$NumberDosesReceived"}}}
}
},{
    $sort:{_id:1}
}
])

// Logic for sampling data
    const rang = range;
    const result: Array<week> = [];

    type week = {
        weekStart?:string;
        weekEnd?:string;
        NumberDosesReceived:number;
      };
    
    let obj: week = {
        NumberDosesReceived: 0,
    }
    for(let i = 1; i <= data.length; i++){
     obj.NumberDosesReceived = Number(data[i-1].NumberDosesReceived) + Number(obj.NumberDosesReceived);
    if(i % Number(rang) === 0){
     obj.weekStart = data[i - Number(rang)]._id;
    obj.weekEnd = data[i-1]._id;
     result.push(obj)
    
     obj = {NumberDosesReceived: 0};
      }
    }

    
//console.log(result)
    res.status(200).json({"summary":result})

}
catch(error){
    
    res.status(404).json({"Error":"Content not found"})
}

} 

export {listData};


