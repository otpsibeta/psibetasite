#!/bin/bash
s3cmd put --exclude '.DS_Store' --exclude '.git/*' -r . s3://thetataupsibeta.org -P
