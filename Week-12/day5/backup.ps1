$env:PGPASSWORD = Read-Host 'PostgreSQL password'
pg_dump -U postgres -h localhost -F c -f backup.dump week12_day5
Write-Host 'Backup created: backup.dump'
Remove-Item Env:PGPASSWORD
