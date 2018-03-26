CREATE OR REPLACE FUNCTION public.slow_process(JSON) RETURNS INTEGER AS $$
DECLARE
	_i INTEGER;
BEGIN
	_i := 0;
	RAISE NOTICE 'PROGRESS:0/100';
	WHILE _i < 100 LOOP
		PERFORM pg_sleep(1);
		_i := _i + 1;
		RAISE NOTICE 'PROGRESS:%/100', _i;
	END LOOP;

	RETURN 1;
END; $$ LANGUAGE plpgsql;

SELECT grape.upsert_process(
	_pg_function := 'slow_process',
	_function_schema := 'public',
	_description := 'Takes 100 seconds to complete',
	_ui_param := '[]',
	_process_type := 'SQL',
	_process_category := 'Samples'
);

