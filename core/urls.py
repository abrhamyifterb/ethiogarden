from django.urls import path, include, re_path
from rest_framework.routers import DefaultRouter
from .views import HeaderViewSet, HomePageViewSet, FooterViewSet, CategoryViewSet, BlogViewSet, VideoViewSet, FAQViewSet, AboutUsViewSet, ContactUsViewSet, index
# from django.views.static import serve

# from ethiogardening import settings

router = DefaultRouter()
router.register(r'header', HeaderViewSet)
router.register(r'homepage', HomePageViewSet)
router.register(r'footer', FooterViewSet)
router.register(r'categories', CategoryViewSet)
router.register(r'blogs', BlogViewSet)
router.register(r'videos', VideoViewSet)
router.register(r'faqs', FAQViewSet)
router.register(r'aboutus', AboutUsViewSet)
router.register(r'contactus', ContactUsViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    re_path(r'^(?!api/|static/|media/).*$', index),
]
