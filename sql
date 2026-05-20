--1.1 
select age, username from users,
--1.2 
select * from users where age>50
--1.3
select * from users where username='smith'
--1.4
select * from users where age between 20 and 30  and gender = 'F'
--1.5
	SELECT * FROM users ORDER BY age DESC LIMIT 10
    --2.1
    update users set bio = 'i like system' where id = 5

--2.2 
update users set age +1
--2.3
UPDATE users SET bio = 'Мэдээлэл байхгүй' WHERE bio IS NULL
--3.1
delete from users
-- sum of anything
SELECT SUM(amount) AS total_deposits FROM bank_transactions WHERE user_id = 101 AND transaction_type = 'deposit' 