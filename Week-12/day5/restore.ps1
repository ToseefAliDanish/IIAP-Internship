$env:PGPASSWORD = Read-Host 'PostgreSQL password'
pg_restore -U postgres -h localhost -d week12_day5 --clean --if-exists --no-owner backup.dump
Write-Host 'Restore finished'
Remove-Item Env:PGPASSWORD
