const express = require('express');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: "http://localhost:3000"
}));

const port = 8000;
app.listen(port, () => console.log(`notes-app listening on port ${port}!`));

const { sequelize, Op } = require('./db')
const Chart = require('./model/chart')
sequelize.sync({ force: true })
    // after sync the success , it pass to promise chain
    .then(async () => {
        try {
            console.log(`Database & tables created!`);
            let chartData = await Chart.bulkCreate([
                { name: 'Rubi', age: 31, gender: 'F' },
                { name: 'Randy', age: 32, gender: 'M' },
                { name: 'Apple', age: 18, gender: 'F' },
                { name: 'Mango', age: 14, gender: 'F' },
                { name: 'Ferry', age: 37, gender: 'M' },
                { name: 'Johnson', age: 55, gender: 'M' },
                { name: 'Larry', age: 45, gender: 'M' },
                { name: 'Ryne', age: 12, gender: 'F' },
                { name: 'Christopher', age: 31, gender: 'M' },
            ])
            console.log("ChartData", chartData);
        } catch (error) {
            console.log("Error", error);
        }


    });

//
// Routes
//
app.get('/', (req, res) => res.send('Notes App'));





// GET / bar => Produce data points for the frontend application in Part 1.

app.get('/bar', async (req, res) => {
    //by using async , code is more easier to read
    try {
        let young = await Chart.count({
            where: {
                age: {
                    [Op.between]: [0, 35],
                }
            }
        })
        let adult = await Chart.count({
            where: {
                age: {
                    [Op.between]: [36, 50],
                }
            }
        })
        let seniors = await Chart.count({
            where: {
                age: {
                    [Op.gte]: 51,
                }
            }
        })
        res.status(200).json({
            Young: young,
            Adult: adult,
            Seniors: seniors
        })
    } catch (error) {
        res.status(500)
    }
});

// GET / pie => Produce data points for the frontend application in Part 1.

app.get('/pie', async (req, res) => {
    let male = await Chart.count({
        where: {
            gender: {
                [Op.eq]: 'M'
            }
        }
    })
    let female = await Chart.count({
        where: {
            gender: {
                [Op.eq]: 'F'
            }
        }
    })

    res.status(200).json({
        Male: male,
        Female: female
    }
    )

});

// POST / chart => Create new row of record
app.post('/chart', (req, res) => {
    console.log("Req" , req.body);
    let { name, age, gender } = req.body
    Chart.create({ name: name, age: Number(age), gender: gender }).then(function (data) {
        res.status(201).json(data);
    });
})


// GET / chart => Get all records from chart table

app.get('/chart', (req, res) => {

})