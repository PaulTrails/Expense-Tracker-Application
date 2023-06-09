const IncomeSchema = require("../models/IncomeModels")


exports.addIncome = async(req, res) => {
    const {title, amount, category, description, date} = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        // validations
        if(!title || !category || !description || !date){
            return res.status(400).json({message: 'All fields are required!'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Amount error!'})
        }
        await income.save()
        res.status(200).json({message: 'Income added!'})
    } catch (error) {
        
    }
    console.log(income)
}
