import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>About Suraksha</h2>
        <p style={styles.paragraph}>
          Suraksha is a comprehensive Women's Safety Reporting System designed
          to create a secure, community-based platform for reporting safety
          concerns across various environments, including but not limited to
          educational institutions like colleges, schools, and universities.
          Our platform empowers individuals to anonymously report incidents
          such as harassment, bullying, and other forms of misconduct,
          providing a safe space for those affected to voice their concerns
          without fear of retribution.
        </p>
        <p style={styles.paragraph}>
          By facilitating anonymous reporting and encouraging community
          involvement, Suraksha helps to identify areas where improvements are
          needed, ensuring that concerns are addressed promptly and
          effectively. Our mission is to foster a culture of safety, respect,
          and accountability, making all spaces safer for everyone.
        </p>
        <p style={styles.paragraph}>
          With Suraksha, we're committed to protecting and empowering
          individuals, helping to create safer communities everywhere.
        </p>
      </div>
    </section>
  );
};

const styles = {
  section: {
    height: '100vh',
    padding: '50px 20px',
    backgroundColor: '#f7f7f7',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
    
  },
  heading: {
    fontSize: '2.5rem',
    color: '#fe2200',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.2rem',
    color: '#333',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
};

export default AboutSection;
