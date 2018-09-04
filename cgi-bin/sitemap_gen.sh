#!/bin/sh

# invoke with cron job that calls --
# /Users/greg/Sites/lightningbikes/lightningbikes-build/cgi-bin/sitemap_gen.sh

# Regenerate the sitemap
# Move to the directory that contains the Google sitemap generator
cd /Users/greg/Sites/lightningbikes/lightningbikes-build/cgi-bin/
echo "Now regenerating sitemap for lightningbikes.com."
python sitemap_gen.py --config=/Users/greg/Sites/lightningbikes/lightningbikes-build/cgi-bin/lightningbikes_config.xml
