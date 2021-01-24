const puppeteer = require('puppeteer')
const { generateText, checkAndGenerate } = require('./util')


test('output name and age', () => {
    const text  = generateText('Patrick', 27)
    expect(text).toBe('Patrick (27 years old)')
})


test('should output data-less text', () => {
    const text = generateText('', null)
    expect(text).toBe(' (null years old)')
})


test('generate valid text output', () => {
    const text = checkAndGenerate('Patrick', 27)
    expect(text).toBe('Patrick (27 years old)')
})


test('should click around', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080']
    })
    const page = await browser.newPage()
    await page.goto('file:///Users/patrickdohn/Work/testing-tutorial/js-testing-introduction/index.html')
    await page.click('input#name')
    await page.type('input#name', 'Patrick')
    await page.click('input#age')
    await page.type('input#age', '27')

})
