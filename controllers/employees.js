const mysql = require('mysql')
const pool = require('../mysql/connection')
const { handleSQLError } = require('../mysql/error')


const getEmployees = (req, res) => {
    pool.query(`SELECT * FROM employees LIMIT 50`,
        (err, rows) => {
            if (err) return handleSQLError(res, err)
            return res.json(rows);
        })
}

const getEmployeesById = (req, res) => {
    let sql = `SELECT * FROM employees WHERE emp_no = ${req.params.id}`

    sql = mysql.format(sql, [req.params.id])

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}

const getEmployeesByFirstName = (req, res) => {
    let sql = `SELECT * FROM employees WHERE first_name = "${req.params.first_name}"`

    sql = mysql.format(sql, [req.params.first_name])

    pool.query(sql, (err, rows) => {
        if (err) return handleSQLError(res, err)
        return res.json(rows);
    })
}

const getEmployeeSalaries = (req, res) => {
    pool.query(`SELECT employees.emp_no,
                employees.first_name, 
                employees.last_name, 
                salaries.salary
                FROM employees
                JOIN dept_emp ON employees.emp_no = dept_emp.emp_no
                JOIN salaries ON salaries.emp_no = employees.emp_no
                WHERE salaries.to_date like "9999%" 
                ORDER BY employees.emp_no
                LIMIT 50`,
        (err, rows) => {
            if (err) return handleSQLError(res, err)
            return res.json(rows);

        })
}

const getEmployeeDepartments = (req, res) => {
    pool.query(`SELECT employees.emp_no,
                employees.first_name, 
                employees.last_name, 
                departments.dept_no,
                departments.dept_name
                FROM employees
                JOIN dept_emp ON employees.emp_no = dept_emp.emp_no
                JOIN departments ON departments.dept_no = dept_emp.dept_no
                ORDER BY employees.emp_no
                LIMIT 50`,
        (err, rows) => {
            if (err) return handleSQLError(res, err)
            return res.json(rows);

        })
}

const getEmployeeAll = (req, res) => {
    pool.query(`SELECT employees.emp_no,
                employees.first_name, 
                employees.last_name, 
                salaries.salary,
                departments.dept_no,
                departments.dept_name
                FROM employees
                JOIN dept_emp ON employees.emp_no = dept_emp.emp_no
                JOIN salaries ON salaries.emp_no = employees.emp_no
                JOIN departments ON departments.dept_no = dept_emp.dept_no
                WHERE salaries.to_date like "9999%" 
                ORDER BY employees.emp_no 
                LIMIT 50`,
        (err, rows) => {
            if (err) return handleSQLError(res, err)
            return res.json(rows);

        })
}


module.exports = {
    getEmployees,
    getEmployeesById,
    getEmployeesByFirstName,
    getEmployeeSalaries,
    getEmployeeDepartments,
    getEmployeeAll
}

// SELECT employees.*, departments.dept_name, dept_emp.emp_no, dept_emp.dept_no, salaries.salary FROM employees 
// JOIN dept_emp ON employees.emp_no = dept_emp.emp_no
// JOIN salaries ON salaries.emp_no = employees.emp_no
// JOIN departments ON departments.dept_no = dept_emp.dept_no

// WHERE salaries.to_date like "9999%" ORDER BY employees.emp_no 