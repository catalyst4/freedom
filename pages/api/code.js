const { connectDb } = require("../../util/db")
const { Email } = require("../../util/Email")

module.exports = async (req, res) => {

    const { email, code } = req.body

    if(!email || !code) {
        return res.json({ success: false })
    }

    const codes = [
        'ADFH-12SD-12DS',
        '12SS-23AS-ASCV',
        'XX18-4539-BNCV',
        'ZXAS-2190-ZXER',
        'OPQW-12VB-CBCN',
        'ZUEJ-12ZO-DHSI',
        'MN32-3290-JKQW',
        'JKLA-99XX-CBSI',
        'POOL-AD78-MMNA'
    ]

    if(!codes.find(validCode => validCode === code)) {
        return res.json({ success: false })
    }

    await connectDb()

    const epic = new Email({ email })

    await epic.save()

    return res.json({ success: true })

}