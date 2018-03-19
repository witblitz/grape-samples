
/*
SELECT grape.table_permissions_add('schemaname', 
	'{ '
		'tablename, '
	'}'::TEXT[], 

	'role_name',
	'SELECT'
);

SELECT grape.table_permissions_add('schemaname',
	'{'
		'tablename'
	'}'::TEXT[],
	'{rolename}'::TEXT[],
	'{SELECT,INSERT,DELETE,UPDATE}'::TEXT[]
);
*/

