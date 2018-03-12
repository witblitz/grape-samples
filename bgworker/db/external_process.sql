
SELECT grape.upsert_process(
	_process_name := 'External Process',
	_pg_function := 'scripts/external_process.js',
	_function_schema := '',
	_description := 'Starts an external process',
	_ui_param := '[]',
	_process_type := 'EXEC',
	_process_category := 'Samples'
);

