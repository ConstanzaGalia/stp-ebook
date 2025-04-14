import React from 'react';
import { Button, Card } from 'antd';
import Link from 'antd/es/typography/Link';

interface Props {
  title: string;
  description: string;
}

export default function AntCard({ title, description }: Props) {
  return (
    <Card title={title} style={{ width: 300 }}>
      <p>{description}</p>
      <Link href="/books/elABCdelEntrenamiento">
        <Button type="primary" block>
          Leer libro
        </Button>
      </Link>
    </Card>
  );
}
