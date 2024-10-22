import Contentsec from '@/components/common/Contentsec';
import Ctawhitebg from '@/components/common/Ctawhitebg';
import Meetteam from '@/components/common/Meetteam';
import Pagebanner from '@/components/common/Pagebanner';
import SEO from '@/components/common/SEO';
import Aboutus from '@/components/home/Aboutus';
import Whyus from '@/components/home/Whyus';


const Page = () => {
  return (
    <div>
      <SEO
        title="Home - Your Digital Marketing Agency"
        description="We provide web design, digital marketing, and SEO services tailored to your business needs."
        keywords="web design, digital marketing, SEO, marketing agency"
        ogImage="/images/home-og-image.png"
        ogType="website"
      />
      <main>
        <Pagebanner pageTitle="About Us" />
        <Contentsec 
          preTitle="Know Me"
          headTitle="About Us"
          para="At Digital Unicon, we pride ourselves on delivering exceptional growth-driven experiences. With over 100 successful projects under our belt, we specialize in generating sales that multiply by 10 times. Our expertise lies in creating innovative web solutions that incorporate the latest creative visuals, ensuring your brand stands out in a competitive market. We understand the unique challenges businesses face, and our tailored strategies are designed to meet your specific goals. Partner with us to elevate your online presence and drive meaningful results that contribute to your long-term success."
        />
        <Aboutus />
        <Meetteam />
        <div className="bg-[red] team-bg !text-black">
          <Whyus />
        </div>

        <Ctawhitebg />
      </main>
    </div>
  );
}

export default Page;
