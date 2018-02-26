CREATE OR REPLACE FUNCTION public.demo_process(JSON) RETURNS JSON AS $$
DECLARE
	_count INTEGER;
	_i INTEGER := 0;
	_guid UUID;
BEGIN
	_count := ($1->>'count')::INTEGER;
	RAISE NOTICE 'Generating % random numbers', _count;
	FOR _i IN 1 .. _count LOOP
		_guid := grape.generate_uuid();
		RAISE NOTICE '%: %', _i, _guid;
		RAISE NOTICE 'PROGRESS: %/%', _i, _count;
	END LOOP;
	RAISE NOTICE 'Done.';
	RETURN grape.api_success();
END; $$ LANGUAGE plpgsql;

SELECT grape.upsert_process(
	_pg_function := 'demo_process',
	_function_schema := 'public',
	_description := 'Generate a number of random GUIDs',
	_ui_param := '[{"name": "count", "type": "integer", "label": "Count", "default": 10}]',
	_process_type := 'SQL',
	_process_category := 'Samples'
);

