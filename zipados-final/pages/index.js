import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('/api/ofertas')
      .then(res => res.json())
      .then(data => setProdutos(data));
  }, []);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px' }}>Ofertas do Dia</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}
      >
        {produtos.map((produto, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #e0e0e0',
              borderRadius: '12px',
              padding: '15px',
              textAlign: 'center',
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              backgroundColor: '#fff'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            }}
          >
            <Image
              src={produto.image}
              alt={produto.title}
              width={200}
              height={200}
            />
            <h3 style={{ margin: '15px 0 10px', fontSize: '1.1rem' }}>
              {produto.title}
            </h3>
            <p style={{ margin: '0 0 10px', fontWeight: 'bold' }}>
              {produto.price} <span style={{ color: 'red' }}>({produto.discount} off)</span>
            </p>
            <a
              href={produto.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '8px 15px',
                backgroundColor: '#0070f3',
                color: '#fff',
                borderRadius: '6px',
                textDecoration: 'none',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#005bb5')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#0070f3')}
            >
              Ver Oferta
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
