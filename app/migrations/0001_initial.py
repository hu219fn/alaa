# Generated by Django 5.0.6 on 2024-07-09 02:58

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('caption', models.TextField(blank=True, max_length=200, null=True)),
                ('price', models.FloatField()),
                ('sell', models.FloatField(blank=True, null=True)),
                ('category', models.CharField(choices=[('M bags', 'M bags'), ('S bags', 'S bags'), ('L bags', 'L bags')], max_length=50)),
                ('photo', models.ImageField(upload_to='products/')),
                ('date', models.DateField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=100)),
                ('caption', models.TextField(blank=True, max_length=200, null=True)),
                ('price', models.FloatField()),
                ('sell', models.FloatField(blank=True, null=True)),
                ('category', models.CharField(choices=[('M bags', 'M bags'), ('S bags', 'S bags'), ('L bags', 'L bags')], max_length=50)),
                ('photo', models.ImageField(upload_to='products/')),
                ('date', models.DateField(auto_now_add=True)),
                ('count', models.IntegerField()),
                ('number', models.IntegerField()),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
