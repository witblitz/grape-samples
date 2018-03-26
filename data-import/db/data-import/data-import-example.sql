BEGIN;

SELECT grape.upsert_data_import_type(
	'data_import_example', 		-- function name
	'Example of a data import function', -- short description
	'You can put some desciption of the file here', -- long description
	'proc',				-- Function schema
	NULL);				-- contains the UI definition

/*
 *  grape.data_import:
 * 	data_import_id
 *	filename
 *	date_inserted
 *
 * _args
 */
CREATE OR REPLACE FUNCTION proc.data_import_example(_data_import grape.data_import, _args JSONB) RETURNS JSON AS $$
DECLARE
	_data JSONB;
BEGIN
 /* 
  * This function gets called once for each row in the data import file
  */
 /*
 *
 *
 *	_args->'index' row index
 *	_args->'data_import_row_id' 
 *	_args->'data' contains a JSONB object with the data
 *	_args->'shared_data' contains a JSONB object with data from a previous function run
 */
	_data := _args->'data';

	RETURN grape.data_import_build_result('OK');
	RETURN grape.data_import_build_result('ERROR');
	
	-- It is also possible to manipulate shared_data and send it back
	_shared_data := _args->'shared_data';
	_shared_data := _shared_data || jsonb_build_object('message', 'message from me');

	RETURN grape.data_import_build_result('OK', _shared_data);
END; $$ LANGUAGE plpgsql;



COMMIT;

