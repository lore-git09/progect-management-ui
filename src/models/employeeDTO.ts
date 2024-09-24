

export class EmployeeDTO{
    

    public constructor(init?: Partial<EmployeeDTO>) {
        Object.assign(this, init);
    }
    id : string = '';
    firstName : string = '' ;
    lastName: string = '';
    email : string = '';


   

}