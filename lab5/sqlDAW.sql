CREATE TABLE employees (
    emp_no      INT             NOT NULL,  -
    birth_date  DATE            NOT NULL,
    first_name  VARCHAR(14)     NOT NULL,
    last_name   VARCHAR(16)     NOT NULL,
    gender      ENUM ('M','F')  NOT NULL,  
    hire_date   DATE            NOT NULL,
	age			INT 			NOT NULL,
    PRIMARY KEY (emp_no)                   
);

CREATE TABLE salaries (
    emp_no      INT    NOT NULL,
    salary      INT    NOT NULL,
    from_date   DATE   NOT NULL,
    to_date     DATE   NOT NULL,
    KEY         (emp_no),
    FOREIGN KEY (emp_no) REFERENCES employees (emp_no) ON DELETE CASCADE,
    PRIMARY KEY (emp_no, from_date)
);


INSERT INTO employees
	VALUES (TO_DATE('17/12/1998', 'DD/MM/YYYY'), 'John', 'Doe', 'M',TO_DATE('17/12/2011', 'DD/MM/YYYY'), 12 ),
	(TO_DATE('31/07/1960', 'DD/MM/YYYY'), 'Jane', 'Doe', 'F',TO_DATE('01/11/2005', 'DD/MM/YYYY'), 12 ),
	(TO_DATE('4/06/1998', 'DD/MM/YYYY'), 'Arthur', 'Morgan', 'M',TO_DATE('1/05/2015', 'DD/MM/YYYY'), 12 ),
	(TO_DATE('01/01/1860', 'DD/MM/YYYY'), 'Dutch', 'Van Der Linde', 'M',TO_DATE('12/12/2000', 'DD/MM/YYYY'), 12 ),
	(TO_DATE('14/10/1998', 'DD/MM/YYYY'), 'Mery', 'Beth', 'F',TO_DATE('17/12/2001', 'DD/MM/YYYY'), 12 ),
	
	
INSERT INTO salaries
	VALUES ('1', 3000, TO_DATE(17/12/2011', 'DD/MM/YYYY'), 17/12/2018', 'DD/MM/YYYY'),
	VALUES ('2', 2500, TO_DATE(1/1/2005', 'DD/MM/YYYY'), 17/12/2015', 'DD/MM/YYYY'),
	VALUES ('2', 3500, TO_DATE(17/12/2019', 'DD/MM/YYYY'), 17/12/2018', 'DD/MM/YYYY'),
	VALUES ('3', 6088, TO_DATE(17/12/2001', 'DD/MM/YYYY'), 17/12/2018', 'DD/MM/YYYY'),
	
	
SELECT * FROM employees;
SELECT salary FROM salaries;

SELECT first_name,last_name FROM employees
WHERE birth_date > TO_DATE('01/01/2000');


SELECT COUNT(*)
FROM employees
WHERE gender = 'F';

SELECT AVG(salary)
FROM salaries
WHERE salary > 3000;

SELECT SUM(salary)
FROM salaries
WHERE to_date < date();

SELECT MAX(SALARY)
FROM SALARIES;

SELECT TOP 5 FROM employees
WHERE age < 40;

SELECT e.first_name
	e.age,
	s.salary,
	s.to_date
FROM employees e
FULL OUTER JOIN salaries s ON employees.emp_no = salaries.emp_no;
ORDER BY s.salary, e.to_date;


SELECT *
FROM employees
INNER JOIN salaries ON employees.emp_no = salaries.emp_no;

SELECT e.first_name
    e.last_name,
	e.age,
	s.salary
FROM employees e
LEFT JOIN salaries s ON employees.emp_no = salaries.emp_no;
ORDER BY s.salary;

SELECT e.first_name
	e.age,
	s.salary,
	e.hire_date
FROM employees e
RIGHT JOIN salaries s ON employees.emp_no = salaries.emp_no;
ORDER BY s.salary, e.to_date;