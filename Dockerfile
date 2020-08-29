FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS runtime
WORKDIR /app
COPY publish/ .

CMD ASPNETCORE_URLS=http://*:$PORT dotnet Application.dll
