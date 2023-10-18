using DungeonsAndDespair.API.DataBase.Context;
using DungeonsAndDespair.Aplication.Interfaces;
using DungeonsAndDespair.Aplication.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddScoped<IUserService, UserServices>();
builder.Services.AddDbContext<DnDsprContext>(
    options => options.UseNpgsql("User ID=postgres;Password=123;Host=localhost;Port=5432;Database=DnDspr;Password=123;")
);
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
