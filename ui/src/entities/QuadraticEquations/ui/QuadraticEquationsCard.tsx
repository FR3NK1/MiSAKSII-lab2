import { Button, Card, Group, NumberInput, Stack, Text } from '@mantine/core'
import { useForm } from '@mantine/form'

import { useLazyGetQuadraticEquationsRootsAndDiscriminantQuery } from '../api/QuadraticEquations'

const QuadraticEquationsCard = () => {
  const [getData, { data }] = useLazyGetQuadraticEquationsRootsAndDiscriminantQuery()

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      a: '',
      b: '',
      c: '',
    },

    validate: {
      a: (value) => (typeof value !== 'number' ? 'Введите a' : null),
      b: (value) => (typeof value !== 'number' ? 'Введите b' : null),
      c: (value) => (typeof value !== 'number' ? 'Введите c' : null),
    },
  })
  return (
    <Card withBorder shadow='sm' radius='md'>
      <form
        onSubmit={form.onSubmit((values) => {
          const payload = {
            a: Number(values.a),
            b: Number(values.b),
            c: Number(values.c),
          }

          getData(payload)
        })}
      >
        <Card.Section withBorder inheritPadding py='xs'>
          <Group justify='space-between'>
            <Text fw={500}>Решение квадратного уравнения</Text>
            <Button type='submit'>Решить</Button>
          </Group>
        </Card.Section>
        <Text mt='sm' c='dimmed' size='sm'>
          Введите коэффециенты квадратного уравнения
        </Text>
        <Group>
          <NumberInput label='a' withAsterisk key={form.key('a')} {...form.getInputProps('a')} />
          <NumberInput label='b' withAsterisk key={form.key('b')} {...form.getInputProps('b')} />
          <NumberInput label='c' withAsterisk key={form.key('c')} {...form.getInputProps('c')} />
        </Group>
        {data && (
          <Card.Section inheritPadding mt='sm' pb='md'>
            <Stack>
              <Text>Дискриминант = {data.discriminant}</Text>
              {typeof data.roots === 'string' ? (
                `${data.roots}`
              ) : (
                <Group>
                  {data.roots.root && <Text>X = {data.roots.root}</Text>}
                  {data.roots.root1 && <Text>X1 = {data.roots.root1}</Text>}
                  {data.roots.root2 && <Text>X2 = {data.roots.root2}</Text>}
                </Group>
              )}
            </Stack>
          </Card.Section>
        )}
      </form>
    </Card>
  )
}

export default QuadraticEquationsCard
