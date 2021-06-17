from django.db import models
from django.db.models.deletion import CASCADE


class Brand(models.Model):
    name = models.CharField(max_length=30)
    category = models.CharField(max_length=20)
    origin = models.CharField(max_length=20)
    established = models.DateField()

    def __str__(self) -> str:
        return f'{self.name}'


class Shop(models.Model):
    brand = models.ForeignKey(Brand, related_name='shops', on_delete=CASCADE)

    city = models.CharField(max_length=30)
    mall_name = models.CharField(max_length=40)
    customers = models.IntegerField(default=1)
    opened = models.DateField()

    def __str__(self) -> str:
        return f'{self.city} - {self.mall_name} - {self.opened}'

    @property
    def brand_name(self) -> str:
        return self.brand.name
