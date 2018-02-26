<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" 
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform" 
	xmlns:fo="http://www.w3.org/1999/XSL/Format"
	>
	<xsl:variable name="smallcase" select="'abcdefghijklmnopqrstuvwxyz'" />
	<xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />
	<xsl:template match="/pg_stat_activity">
		<fo:root xmlns:fo="http://www.w3.org/1999/XSL/Format">
			<fo:layout-master-set>
				<fo:simple-page-master master-name="first" page-height="210mm" page-width="297mm" margin-top="1.8cm" margin-bottom="0cm" margin-left="1.8cm" margin-right="1.8cm">
					<fo:region-body />
					<fo:region-before extent="1.8cm" />
					<fo:region-after extent="1.8cm" />
				</fo:simple-page-master>	
			</fo:layout-master-set>
			<fo:page-sequence master-reference="first" id="seq1" >
				<fo:static-content flow-name="xsl-region-before" >
					<fo:block >
						HEADER
					</fo:block>
				</fo:static-content>
				<fo:static-content flow-name="xsl-region-after" extent="5.0cm" >
					<fo:block>
						FOOTER
					</fo:block>
				</fo:static-content>
				<fo:flow flow-name="xsl-region-body" >
					<fo:block>
						<xsl:apply-templates select="record" />
					</fo:block>
				</fo:flow>
			</fo:page-sequence>
		</fo:root>
	</xsl:template>

	<xsl:template match="record">
		<fo:block>
			PID: <xsl:text select="pid" />
			Query: <xsl:text select="query" />
		</fo:block>
	</xsl:template>
	
</xsl:stylesheet>
<!--xsltproc convert.xsl policy_movement.xml > policy_movement.fop && fop policy_movement.fop -pdf pm.pdf && evince pm.pdf-->
