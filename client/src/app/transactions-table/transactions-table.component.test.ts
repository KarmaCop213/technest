import * as transactions_table_component from "./transactions-table.component"
import * as account_service from "../services/account.service"

// @ponicode
describe("ngOnInit", () => {
    let inst: any
    let inst2: any

    beforeEach(() => {
        inst = new account_service.AccountService(undefined)
        inst2 = new transactions_table_component.TransactionsTableComponent(inst)
    })

    test("0", () => {
        let callFunction: any = () => {
            inst2.ngOnInit()
        }
    
        expect(callFunction).not.toThrow()
    })
})
