"use client";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Container,
  SidebarTrigger,
} from "@workspace/ui";
import { ModeToggle } from "~ui/components/theme";

export default function Page() {
  return (
    <Container>
      <Container.Header>
        <SidebarTrigger />
        <Breadcrumb className="ml-3">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink>My Project</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Asset</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Chat</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Container.Spacer />
        <ModeToggle />
      </Container.Header>
      <Container.Content className="overflow-auto overscroll-contain">
        <article className="prose-sm p-12">
          <h1>The quick brown fox jumps over the lazy dog</h1>
          <h2>The quick brown fox jumps over the lazy dog</h2>
          <h3>The quick brown fox jumps over the lazy dog</h3>
          <h4>The quick brown fox jumps over the lazy dog</h4>
          <h5>The quick brown fox jumps over the lazy dog</h5>
          <h6>The quick brown fox jumps over the lazy dog</h6>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            iaculis velit vitae ipsum varius, vel accumsan nisi posuere. Cras
            euismod erat nunc, at accumsan odio suscipit non. Pellentesque purus
            neque, blandit ut feugiat vitae, rutrum eu purus. Sed mollis
            bibendum nisl vitae lacinia. Nam finibus ante vitae lobortis
            imperdiet. Duis faucibus nisi quis finibus pretium. Vivamus vel
            varius dui. Integer posuere eros nisl, id pulvinar enim aliquet ut.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Aenean vestibulum sem id ex cursus, at
            pretium velit vehicula. Etiam ut bibendum augue. Nullam non mauris
            orci.
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Integer placerat tortor non est eleifend</li>
            <li>Et pellentesque massa</li>
            <li>Mollis. Ut laoreet a ante nec vestibulum</li>
            <li>Pellentesque posuere, nisl et fermentum euismod</li>
          </ul>
          <p>
            Integer placerat tortor non est eleifend, et pellentesque massa
            mollis. Ut laoreet a ante nec vestibulum. Pellentesque posuere, nisl
            et fermentum euismod, dolor purus laoreet orci, vulputate ultricies
            sapien libero non nisl. Sed eleifend imperdiet condimentum. Donec
            mollis, augue vitae sollicitudin convallis, sem sapien facilisis
            arcu, a efficitur libero est eget augue. Quisque a augue dictum,
            pretium nisi nec, vehicula quam. Integer mattis metus augue, in
            lobortis erat convallis ac. Pellentesque consectetur iaculis
            aliquam. Nam augue felis, mollis a laoreet sit amet, porta vitae
            libero. Ut nisl est, tincidunt sed convallis at, efficitur varius
            augue.
          </p>
          <ol>
            <li>Lorem ipsum dolor sit amet</li>
            <li>
              Consectetur adipiscing elit
              <ol>
                <li>Integer placerat tortor non est eleifend</li>
                <li>Et pellentesque massa</li>
                <li>Mollis. Ut laoreet a ante nec vestibulum</li>
                <li>Pellentesque posuere, nisl et fermentum euismod</li>
              </ol>
            </li>
            <li>Integer placerat tortor non est eleifend</li>
            <li>Et pellentesque massa</li>
            <li>Mollis. Ut laoreet a ante nec vestibulum</li>
            <li>Pellentesque posuere, nisl et fermentum euismod</li>
          </ol>
          <p>
            Aliquam sed semper ex. Curabitur at nisi vel ante convallis sodales.
            Aenean dictum porta porttitor. Aliquam dui nisl, pellentesque sit
            amet arcu vitae, mattis iaculis est. Vivamus suscipit accumsan
            magna, vitae mattis nibh. Integer vulputate fringilla lacus, id
            consequat ligula aliquet non. Duis ac risus et urna sodales
            interdum. Duis ut purus non enim volutpat interdum. Aliquam
            vehicula, enim sed mattis mollis, velit lacus ultricies lacus, nec
            hendrerit elit ante sit amet magna. Suspendisse eu ipsum felis.
            Vivamus tellus velit, convallis vitae vulputate nec, sagittis eget
            ipsum. Sed porta placerat velit eu auctor. Phasellus tempor lobortis
            lorem, sed sagittis sem venenatis ut. Morbi sed enim nec quam tempor
            gravida.
          </p>
          <p>
            Proin non ex et nisi eleifend aliquam ut sed est. Nunc scelerisque
            dignissim hendrerit. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas. Nullam vehicula, eros
            id sodales vulputate, sem magna dignissim sapien, sit amet vulputate
            tellus justo rutrum eros. Curabitur vel venenatis lorem, quis
            volutpat ipsum. Fusce tempor pharetra efficitur. Praesent sodales
            sem sed mauris condimentum dignissim.
          </p>
          <p>
            Phasellus ac enim feugiat mauris finibus pellentesque. Nullam in sem
            velit. Vestibulum auctor quis erat et laoreet. Nullam vestibulum
            volutpat turpis id faucibus. Suspendisse a lorem tristique,
            dignissim leo non, dictum dui. Nam erat ex, ullamcorper interdum
            diam vitae, malesuada rhoncus odio. Proin tincidunt nisi non
            scelerisque rhoncus. Nunc mattis enim a pulvinar finibus.
            Pellentesque quis congue augue. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Mauris
            euismod turpis ut tortor feugiat, quis vestibulum turpis convallis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            iaculis velit vitae ipsum varius, vel accumsan nisi posuere. Cras
            euismod erat nunc, at accumsan odio suscipit non. Pellentesque purus
            neque, blandit ut feugiat vitae, rutrum eu purus. Sed mollis
            bibendum nisl vitae lacinia. Nam finibus ante vitae lobortis
            imperdiet. Duis faucibus nisi quis finibus pretium. Vivamus vel
            varius dui. Integer posuere eros nisl, id pulvinar enim aliquet ut.
            Orci varius natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Aenean vestibulum sem id ex cursus, at
            pretium velit vehicula. Etiam ut bibendum augue. Nullam non mauris
            orci.
          </p>
          <p>
            Integer placerat tortor non est eleifend, et pellentesque massa
            mollis. Ut laoreet a ante nec vestibulum. Pellentesque posuere, nisl
            et fermentum euismod, dolor purus laoreet orci, vulputate ultricies
            sapien libero non nisl. Sed eleifend imperdiet condimentum. Donec
            mollis, augue vitae sollicitudin convallis, sem sapien facilisis
            arcu, a efficitur libero est eget augue. Quisque a augue dictum,
            pretium nisi nec, vehicula quam. Integer mattis metus augue, in
            lobortis erat convallis ac. Pellentesque consectetur iaculis
            aliquam. Nam augue felis, mollis a laoreet sit amet, porta vitae
            libero. Ut nisl est, tincidunt sed convallis at, efficitur varius
            augue.
          </p>
          <p>
            Aliquam sed semper ex. Curabitur at nisi vel ante convallis sodales.
            Aenean dictum porta porttitor. Aliquam dui nisl, pellentesque sit
            amet arcu vitae, mattis iaculis est. Vivamus suscipit accumsan
            magna, vitae mattis nibh. Integer vulputate fringilla lacus, id
            consequat ligula aliquet non. Duis ac risus et urna sodales
            interdum. Duis ut purus non enim volutpat interdum. Aliquam
            vehicula, enim sed mattis mollis, velit lacus ultricies lacus, nec
            hendrerit elit ante sit amet magna. Suspendisse eu ipsum felis.
            Vivamus tellus velit, convallis vitae vulputate nec, sagittis eget
            ipsum. Sed porta placerat velit eu auctor. Phasellus tempor lobortis
            lorem, sed sagittis sem venenatis ut. Morbi sed enim nec quam tempor
            gravida.
          </p>
          <p>
            Proin non ex et nisi eleifend aliquam ut sed est. Nunc scelerisque
            dignissim hendrerit. Pellentesque habitant morbi tristique senectus
            et netus et malesuada fames ac turpis egestas. Nullam vehicula, eros
            id sodales vulputate, sem magna dignissim sapien, sit amet vulputate
            tellus justo rutrum eros. Curabitur vel venenatis lorem, quis
            volutpat ipsum. Fusce tempor pharetra efficitur. Praesent sodales
            sem sed mauris condimentum dignissim.
          </p>
          <p>
            Phasellus ac enim feugiat mauris finibus pellentesque. Nullam in sem
            velit. Vestibulum auctor quis erat et laoreet. Nullam vestibulum
            volutpat turpis id faucibus. Suspendisse a lorem tristique,
            dignissim leo non, dictum dui. Nam erat ex, ullamcorper interdum
            diam vitae, malesuada rhoncus odio. Proin tincidunt nisi non
            scelerisque rhoncus. Nunc mattis enim a pulvinar finibus.
            Pellentesque quis congue augue. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Mauris
            euismod turpis ut tortor feugiat, quis vestibulum turpis convallis.
          </p>
        </article>
      </Container.Content>
      <Container.Footer>
        LEFT
        <Container.Spacer />
        RIGHT
      </Container.Footer>
    </Container>
  );
}
