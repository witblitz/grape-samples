CREATE OR REPLACE FUNCTION public.error_process(JSON) RETURNS INTEGER AS $$
DECLARE
BEGIN
	RAISE EXCEPTION 'This is an error!';
	RAISE NOTICE 'Done.';
	RETURN 1;
END; $$ LANGUAGE plpgsql;

SELECT grape.upsert_process(
	_pg_function := 'error_process',
	_function_schema := 'public',
	_description := 'Throws an error',
	_ui_param := '[]',
	_process_type := 'SQL',
	_process_category := 'Samples'
);

