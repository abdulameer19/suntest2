import express from 'express'



import { listData } from '../controllers/data'; 

 const router=express.Router();

// Route to get all the records
router.route("/api/data").get(listData);

 


 export default router;
