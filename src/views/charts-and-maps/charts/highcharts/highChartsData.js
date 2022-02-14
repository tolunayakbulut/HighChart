import axios from 'axios'


// Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlBPZFIzb3hwMFVrcElRSCIsImlhdCI6MTY0NDA1MzQ2MSwiZXhwIjoxNjQ0MTM5ODYxfQ.M7dNETUoVHC1xLMDY_rTX90g2LBPXSGzYNURKc9HNK4
export function getDataSales() {
    return axios.post('https://iapitest.eva.guru/data/sales-finances/', { marketplace: 'Amazon.com', sellerId: 'A2AYEFBRNOKNF9' }, {
        headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlBPZFIzb3hwMFVrcElRSCIsImlhdCI6MTY0NDA1MzQ2MSwiZXhwIjoxNjQ0MTM5ODYxfQ.M7dNETUoVHC1xLMDY_rTX90g2LBPXSGzYNURKc9HNK4' }
    })
}

// Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlBPZFIzb3hwMFVrcElRSCIsImlhdCI6MTY0NDA1MzQ2MSwiZXhwIjoxNjQ0MTM5ODYxfQ.M7dNETUoVHC1xLMDY_rTX90g2LBPXSGzYNURKc9HNK4
export function getDataExpense() {
    return axios.post('https://iapitest.eva.guru/data/sales-expense-by-request-date/', { marketplace: 'Amazon.com', sellerId: 'A2AYEFBRNOKNF9', date: { month: '10', year: '2020' } }, {
        headers: { 'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlBPZFIzb3hwMFVrcElRSCIsImlhdCI6MTY0NDA1MzQ2MSwiZXhwIjoxNjQ0MTM5ODYxfQ.M7dNETUoVHC1xLMDY_rTX90g2LBPXSGzYNURKc9HNK4' }
    })
}