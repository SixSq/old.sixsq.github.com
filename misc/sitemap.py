#!/usr/local/opt/python/bin/python2.7

import os
import sys
import xml.etree.ElementTree as ET

ET.register_namespace('','http://www.sitemaps.org/schemas/sitemap/0.9')

new_sitemap_filename = 'new-sitemap.xml'

def crawl():
  sitemaps = {}
  for filename in os.listdir("."):
    if filename.startswith("sitemap") and filename.endswith(".xml"):
        sitemaps[filename] = ET.parse(filename)
  
  if len(sitemaps) == 0:
    return
  
  rootfilename, root = sitemaps.popitem()
  urlset = root.getroot()

  for filename, sm in sitemaps.iteritems():
    urls = sm.getroot().findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url')
    print 'Adding %s url entries from file %s' % (len(urls), filename)
    urlset.extend(urls)

  root.write(new_sitemap_filename, encoding='utf-8', xml_declaration=True)
  
  return len(root.getroot().findall('{http://www.sitemaps.org/schemas/sitemap/0.9}url'))

if __name__ == "__main__":
    try:
        count = crawl()
        print 'Aggregated sitemap %s contains %s url entries' % (new_sitemap_filename, count)
    except KeyboardInterrupt:
        print('\n\nExecution interrupted by the user... goodbye!')
        sys.exit(-1)        
