from django.contrib import admin

from core.models import Blog, Video, AboutUs, ContactUs, FAQ

# Register your models here.
@admin.register(Blog)
class StoreAdmin(admin.ModelAdmin):
    pass

@admin.register(Video)
class StoreAdmin(admin.ModelAdmin):
    pass

@admin.register(AboutUs)
class StoreAdmin(admin.ModelAdmin):
    pass

@admin.register(ContactUs)
class StoreAdmin(admin.ModelAdmin):
    pass

@admin.register(FAQ)
class StoreAdmin(admin.ModelAdmin):
    pass