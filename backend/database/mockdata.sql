INSERT INTO company (company_id, name, location, category, qr_code, reusable_cup) VALUES ("C00001", "Starbucs", "Rocky road 85, Dundalk, Ireland", "Coffee","starbucksAddStamp", TRUE );
INSERT INTO company (company_id, name, location, category, qr_code, reusable_cup) VALUES ("C00002", "Costa", "Bubble road 12, Dublin, Ireland", "Coffee","costaAddStamp", TRUE );
INSERT INTO company (company_id, name, location, category, qr_code, reusable_cup) VALUES ("C00003", "LocalCoffee", "Long road 145, Cork, Ireland", "Coffee","localCoffeeAddStamp", TRUE );
INSERT INTO company (company_id, name, location, category, qr_code, reusable_cup) VALUES ("C00004", "GenericCoffeeShop", "Bila cesta, Teplice, Czechia", "Coffee","genericCoffeeAddStamp", false );
INSERT INTO company (company_id, name, location, category, qr_code, reusable_cup) VALUES ("F00001", "McDonalds", "St.Antonio streat, Porto, Portugal", "Fast food","burgerAddStamp", false );

INSERT INTO customer (customer_id, name, email, password, telephone) VALUES ("U00000000001","John Duffy","johnyduff@gmail.com","J1234", 0890123456);
INSERT INTO customer (customer_id, name, email, password, telephone) VALUES ("U00000000002","Jacob Smith","jacSmith@gmail.com","wewqqWWW87", 08901234566);
INSERT INTO customer (customer_id, name, email, password, telephone) VALUES ("U00000000003","Patrik Dvorak","dvorakPP@gmail.com","PlsSaveMe123", 721828698);
INSERT INTO customer (customer_id, name, email, password, telephone) VALUES ("U00000000004","Isabella McEven","funnyBee58@gmail.com","ThisIsLiteralTorture", 0888888888);
INSERT INTO customer (customer_id, name, email, password, telephone) VALUES ("U00000000005","Eve Masters","fluffyRabbit12@gmail.com","Send7Help", 087889755);

INSERT INTO card (card_id, customer_id, company_id, num_of_stamps, max_stamps, expiry_date) VALUES ("S000000000001","U00000000001", "C00001", 10, 6, '2022-11-30');
INSERT INTO card (card_id, customer_id, company_id, num_of_stamps, max_stamps, expiry_date) VALUES ("S000000000002","U00000000001", "C00002", 10, 2, '2022-10-31');
INSERT INTO card (card_id, customer_id, company_id, num_of_stamps, max_stamps, expiry_date) VALUES ("S000000000003","U00000000001", "C00003", 8, 4, '2023-01-01');
INSERT INTO card (card_id, customer_id, company_id, num_of_stamps, max_stamps, expiry_date) VALUES ("S000000000004","U00000000002", "C00001", 10, 8, '2022-11-30');
INSERT INTO card (card_id, customer_id, company_id, num_of_stamps, max_stamps, expiry_date) VALUES ("S000000000005","U00000000003", "C00004", 12, 9, '2022-12-31');
INSERT INTO card (card_id, customer_id, company_id, num_of_stamps, max_stamps, expiry_date) VALUES ("S000000000006","U00000000004", "F00001", 6, 5, '2022-10-20');
INSERT INTO card (card_id, customer_id, company_id, num_of_stamps, max_stamps, expiry_date) VALUES ("S000000000007","U00000000004", "C00002", 10, 1, '2022-10-31');
INSERT INTO card (card_id, customer_id, company_id, num_of_stamps, max_stamps, expiry_date) VALUES ("S000000000008","U00000000004", "C00004", 12, 9, '2022-12-31');
INSERT INTO card (card_id, customer_id, company_id, num_of_stamps, max_stamps, expiry_date) VALUES ("S000000000009","U00000000005", "C00003", 8, 7, '2023-01-01');