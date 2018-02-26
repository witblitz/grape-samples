
CREATE OR REPLACE FUNCTION demo.create_xml () RETURNS TEXT AS $$
DECLARE
	_rec RECORD;
	_ret TEXT;
BEGIN
	_ret := '<pg_stat_activity>';
	FOR _rec IN SELECT * FROM pg_stat_activity LOOP
		_ret := _ret || xmlelement (name record, 
			xmlelement(name pid, _rec.pid),
			xmlelement(name client_addr, _rec.client_addr),
			xmlelement(name query, _rec.query)
		)::TEXT;
	END LOOP;
	_ret := _ret || '</pg_stat_activity>';
	
	RETURN _ret;
END; $$ LANGUAGE plpgsql;

