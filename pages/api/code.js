module.exports = (req, res) => {

    const { code } = req.body

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

    if(codes.find(validCode => validCode === code)) {
        res.json({ success: true })
    } else {
        res.json({ success: false })
    }

}