export class ReimbursementRequests {
    reimb_Id : number;
    reimb_Amount: number;
    reimb_Submitted: any;
    reimb_Resolved: any;
    reimb_Receipt: string;
    reimb_Description: string;
    reimb_Author: number;
    reimb_Resolver: number;
    reimb_Status_Id: number;
    reimb_Type_Id: number;


    constructor( reimb_Id : number,reimb_Amount: number, reimb_Submitted: any, reimb_Resolved: any, reimb_Receipt: string,
        reimb_Description: string,reimb_Author: number,reimb_Resolver: number,reimb_Status_Id: number,reimb_Type_Id: number){
            this.reimb_Id = reimb_Id;
            this.reimb_Amount = reimb_Amount;
            this.reimb_Submitted = reimb_Submitted;
            this.reimb_Resolved = reimb_Resolved;
            this.reimb_Receipt = reimb_Receipt;
            this.reimb_Description = reimb_Description;
            this.reimb_Author = reimb_Author;
            this.reimb_Resolver = reimb_Resolver;
            this.reimb_Status_Id = reimb_Status_Id;
            this.reimb_Type_Id = reimb_Type_Id;



    }


}
