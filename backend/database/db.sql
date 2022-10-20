CREATE TABLE customer(
customer_id  VARCHAR(20) NOT NULL,
name VARCHAR(20),
email VARCHAR(20),
password VARCHAR(20),
telephone INTEGER(13),
PRIMARY KEY (customer_id)
);


CREATE TABLE company(
company_id VARCHAR(20) NOT NULL,
name VARCHAR(20),
location VARCHAR(50),
category VARCHAR(20),
qr_code VARCHAR(20),
reusable_cup BOOLEAN,
PRIMARY KEY (company_id)
);

CREATE TABLE card(
card_id VARCHAR(20) NOT NULL,
customer_id VARCHAR(20),
company_id VARCHAR(20),
num_of_stamps INTEGER(2),
max_stamps INTEGER(2),
expiry_date DATE,
PRIMARY KEY (card_id),
FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
FOREIGN KEY (company_id) REFERENCES company(company_id)
);