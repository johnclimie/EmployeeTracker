USE empTracker_db;

INSERT INTO department (name) VALUES ('test1'), ('test2'), ('test3');


INSERT INTO role (title, salary, department_id) VALUES ('role1', 1, 1), ('role2', 2, 2), ('role3', 3, 3);


INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("first1", "last1", 1, null);